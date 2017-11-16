var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

//Customer View - Function will allow customer to see all items available for purchase
function start() {
  connection.query("SELECT * FROM bamazon", function(err, results) {
    if (err) throw err;
      for (var i = 0; i < results.length; i++) {
        console.log(results[i].id+" || "+results[i].product_name+" ||  "+results[i].department_name+" ||  "+results[i].price+" || "+results[i].stock_quantity);
      }
      order(results);
    })
}
////////////////////////////////////////////////////////////////////////////////

//Purchase Menu - Function will allow customer to select which Item, based on the Item ID, they would
//like to purchase
function order(results){
  inquirer.
    prompt([{
      type: "input",
      name: "choice",
      message: "Which product (id number) would you like to order? (Press Q to quit)"
    }]).then(function(answer){
      // console.log(answer.choice);
        if(answer.choice.toUpperCase() == "Q"){
          connection.end(); //Ends the application
        }
      for(var i = 0; i<results.length; i++){
        if(results[i].id == answer.choice){
          // console.log(results[i].id);
          var idNum = answer.choice;
          console.log(idNum);
          //Prompts user to input how many of selected item they would like to purchase
          inquirer.
            prompt({
              type: "input",
              name: "amount",
              message: "How many?"
            }).then(function(answer){
              if(results[idNum-1].stock_quantity>answer.amount){
                // console.log(results[idNum-1].stock_quantity);
                connection.query("UPDATE bamazon SET stock_quantity="+
                  (results[idNum-1].stock_quantity-answer.amount)+" WHERE id = "+idNum,
                  function(error, res){   //Updates mySQL database to reflect changes in stock_quantity based on the amount purchased
                    console.log("Order success! Your total charge is: $"+(results[idNum-1].price*answer.amount)); //adds the total amount purchased.
                    start();
                  });
              }
              else{
                console.log("There's not enough in stock to complete your purchase. Please select again");
                start(); //Sends customer back to the Items view with updated stock_quantity
              }
            })
        }
      }
    })
  };