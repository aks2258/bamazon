# bamazon

## Summary
This app will allow the user to pick one of ten possible items for purchase by inputing the corresponding number to the item.

After selecting the desired item, the user will be asked how many of said item they wish to purchase. 
	
	If the amount they entered exceeds the amount available, the user will be notified that there are not enough items in stock and they will be redirected to the display of items.

	If the amount they entered is less than what is available, then the table stored in the mySQL database will be updated to reflect how many items of that specific product will be left in stock after the purchase.

When the Purchase is complete the app will start over again from the beginning displaying the updated table after the purchase has been made.