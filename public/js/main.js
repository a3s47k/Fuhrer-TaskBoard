$(function () {
	dropdownMenu()
	toggleTask()
	hamburger()
	datePicker()

})


var data = [{
	"id": 1,
	"name": "QQQQ",
	"author": "No more sorrow",
	"timesCreate": "6 month",
	"timeEdit": "2 mongth",
}, {
	"id": 2,
	"name": "KKKK",
	"author": "No more sorrow",
	"timesCreate": "6 month",
	"timeEdit": "2 mongth",

}]
var G_APP = {
	list: ['taskCyan', 'taskGreen', 'taskRed'],
	template: (e) => {
		return '<li>' + e + '</li>'
	},
	init: () => {
		for (let key in G_APP.list) {
			if (G_APP.list.hasOwnProperty(key)) {
				let element = G_APP.list[key];
				$('#' + element).append(G_APP.createList())
				G_APP.enableSortAble(element)

			}
		}
	},
	createList: () => {
		let tmp = [];
		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				const element = data[key].name;
				tmp.push(G_APP.template(element));
				console.log(element);
			}
		}
		return tmp
	},
	enableSortAble: (e) => {
		let el = document.getElementById(e)
		let sortable = Sortable.create(el, {

			group: "name",
			onEnd: (evt) => {
				console.log('Finish', evt)
			},
			onUpdate: (evt) => {
				console.log('Update', evt)
			},
			onSort: (evt) => {
				console.log('Sort', evt)
			},
		})
	},



}
G_APP.init()



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
