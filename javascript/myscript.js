const icons = 
    [{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

let container = document.querySelector(".my_icon-box");

const colors = ['magenta', 'lime', 'turquoise', 'teal', 'blue'];

const select = document.getElementById("type-of");

const types = getProprietyOfArrayObject(icons, "type");

addOption(types, select);



function printToPage(array, container){
    let temporaryHTML = '';

    array.forEach(element => {
        const {name, prefix, type, family, color} = element;

        temporaryHTML += 
        `<div>
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <h4 class"my_icon-title">${name} (${type})</h4>
        </div>`
    });

    container.innerHTML = temporaryHTML;
};

printToPage(icons, container);

function getProprietyOfArrayObject(array, propriety){
    const types = [];

    array.forEach((element) => {
        if(! types.includes(element[propriety])){
            types.push(element[propriety]);
        }
    });
    return types
};

function colorMyItems(array, colors){
    const types = getProprietyOfArrayObject(array, "type");

    const colorMyArray = array.map((element) => {
        const indexOfType = types.indexOf(element.type)
        if (indexOfType !== -1){
            element.color = colors[indexOfType];
        };
        return element;
    });
    return colorMyArray
};

colorMyItems = colorMyItems(icons, colors);

printToPage(colorMyItems, container);

function addOption(option, select){
    option.forEach((element) => {
        select.innerHTML += `<option valur="${element}">${element}</option>`;
    });
};

select.addEventListener('change', () => {
    const selectValue = select.value;

    const filteredIcons = filterItems(icons, selectValue);

    printToPage(filteredIcons, container);
});

function filterItems(array, filter){
    if (filter.trim().toLowerCase() === 'all'){
        return array;
    };

        return  array.filter((element) => element.type == filter);
};