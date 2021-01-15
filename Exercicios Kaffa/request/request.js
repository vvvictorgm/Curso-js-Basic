const request = obj =>{
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);

    xhr.addEventListener('load',()=>{
        if(xhr.status>=200 && xhr.status<300){
            obj.succes(xhr.responseText);
        }        else{
            obj.error(xhr.statusText);
        }
    })
    
};