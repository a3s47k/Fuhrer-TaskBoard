$(function () {
	startUp()
	dropdownMenu()
	toggleTask()
	hamburger()
	datePicker()

})


function startUp(){

	var taskCyan = document.getElementById('taskCyan');
	var taskGreen = document.getElementById('taskGreen');
	var taskRed = document.getElementById('taskRed');

	// List with handle
	var sortCyan = new Sortable(taskCyan,{
		group: {name: "task-table",pull: true,put: false},
	})
	var sortGreen =new Sortable(taskGreen,{
		group: {name: "task-table",pull: true,put: true},
	})
	var sortRed =new Sortable(taskRed,{
		group: {name: "task-table",pull: false,put: true},
	})
}



function hamburger() {
	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("is-active");
	});
}

function datePicker() {
	$("#datepicker").datepicker();
};

function dropdownMenu() {
	$('ul .drop-down').each(function (index, val) {
		$(val).hover(function () {
			$(this).closest('li').find('.drop-down-menu').addClass('show').removeClass('hide');
		}, function () {
			$(this).closest('li').find('.drop-down-menu').removeClass('show').addClass('hide');
		})
	})
}

function toggleTask() {
	$('.arrow-toggle').each(function (index, val) {
		$(val).hover(function () {
			$(this).closest('li').find('.box-item-show').addClass('show').removeClass('hide');
			console.log("test")
		}, function () {
			$(this).closest('li').find('.box-item-show').removeClass('show').addClass('hide');
		})
	})

}
