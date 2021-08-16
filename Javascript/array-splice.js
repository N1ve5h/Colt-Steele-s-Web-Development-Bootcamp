const months = ['Jan', 'March', 'April', 'June'];
//splice(start, deleteCount, item)
//start = The index at which to start changing the array.
//deleteCount = An integer indicating the number of elements in the array to remove from start.
//item = The lements to add to the array, beginning from start.

//months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb');
//start = 1 meaning splice() will start at months[1].
//deleteCount = 0, therefore splice deletes 0 elements in the array.
//item = 'Feb' meaning the element the user wants to add into the array.
console.log(months);
//[ 'Jan', 'Feb', 'March', 'April', 'June' ]
months.splice(4, 1, 'May');
//start = 4 meaning splice() will start at months[4].
//deleteCount = 1, therefore splice deletes 1 element in the array.
//item = 'May' meaning the element the user wants to add into the array.
console.log(months);
//[ 'Jan', 'Feb', 'March', 'April', 'May' ]
//'June' was deleted and 'May' has been inserted into the array.