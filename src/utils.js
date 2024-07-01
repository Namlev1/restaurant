export function createP(className, text){
    const p = document.createElement('p');
    p.classList.add(className)
    p.textContent = text;
    return p;
}

export function createDiv(className){
    const div = document.createElement('div');
    div.classList.add(className)
    return div;
}

export function createForm(className){
    const form = document.createElement('form');
    form.classList.add(className)
    return form;
}

export function createH1(text){
    const h1 = document.createElement('h1');
    h1.textContent = text;
    return h1;
}

export function createH2(text){
    const h2 = document.createElement('h2');
    h2.textContent = text;
    return h2;
}

export function createSelect(name, id, options){
    const select = document.createElement('select');
    select.name = name;
    select.id = id;

    for (let key in options) {
            let option = document.createElement('option');
            option.value = key;
            option.textContent = options[key];
            select.appendChild(option);
    }

    return select;
}

export function createDate(name, id){
    const input = document.createElement('input');
    input.type = 'date';
    input.name = name;
    input.id = id;
    return input;
}

export function createTime(name, id){
    const input = document.createElement('input');
    input.type = 'time';
    input.name = name;
    input.id = id;
    return input;
}

export function createBtn(type, className, text){
    const btn = document.createElement('button');
    btn.type = type;
    btn.classList.add(className);
    btn.textContent = text;
    return btn;
}