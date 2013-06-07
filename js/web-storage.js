$(document).ready(function(){
	
	storage = sessionStorage;
	
	$("button#getItem").click(function(){ getItem(); });
	
	$("button#setItem").click(function(){ setItem(); });
	
	$("button#removeItem").click(function(){ removeItem() });
	
	$("button#clear").click(function(){ clear(); });
	
	/* $(window).bind("storage", function(event){ alert(event.key); }); */
	
	refresh();
});

function getItem() {
	
	var key = $("select#getItem-key").val();
	
	var value = storage.getItem(key);
	
	$("input:text#getItem-value").val(value);
	
}


function setItem() {
	
	var key = $("input:text#setItem-key").val();
	var value = $("input:text#setItem-value").val();
	
	storage.setItem(key, value);
	
	refresh();
}

function removeItem() {
	
	var key = $("select#removeItem-key").val();
	
	storage.removeItem(key);
	
	refresh();
}

function clear(){
	
	storage.clear();
	
	refresh();
}

function viewStorage(){
	
	var storageViewElement = $("dl#storageView");
	
	storageViewElement.empty();
	
	for(var i=0 ; i < storage.length; i++) {
		
		storageViewElement.append('<dt>' + storage.key(i) + '</dt>');
		storageViewElement.append('<dd>' + storage.getItem(storage.key(i)) + '</dd>');
		
	}
	
	return ;
}

function getKeys() {
	
	var array = new Array();
	
	for(var i=0 ; i < storage.length; i++) {
		
		array.push(storage.key(i));
		
	}
	
	return array;
}

function refreshGetItemKey() {
	
	var options = getKeys();
	
	var getItemKeyElement = $("select#getItem-key");
	
	getItemKeyElement.empty();
	
	options.forEach(function(element){
		
		getItemKeyElement.append('<option value="' + element + '">' + element + '</option>');
	});
	
}

function refreshRemoveItemKey() {
	
	var options = getKeys();
	
	var removeItemKeyElement = $("select#removeItem-key");
	
	removeItemKeyElement.empty();
	
	options.forEach(function(element){
		
		removeItemKeyElement.append('<option value="' + element + '">' + element + '</option>');
	});
	
}


function refresh() {
	refreshGetItemKey();
	refreshRemoveItemKey();
	viewStorage();
}



