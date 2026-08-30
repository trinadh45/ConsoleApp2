/* let xhr=new XMLHttpRequest();
xhr.open('GET','https://trinadh45.github.io/ConsoleApp2/ExportData.json');
xhr.responseType='json';
xhr.onload=()=>{
    console.log(xhr.response);
}
xhr.send(); */

function func(){
    let id=document.getElementById('body');
    console.log(id);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://trinadh45.github.io/ConsoleApp2/ExportData.json');
    xhr.responseType='json';
    xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.response);
        let html=`
        <div style="text-align:center;height:100px;background-color:gray;color:white">
           <h1>Trinadh Rao gancheeri</h1>
           <h3>
           <a href='https://www.linkedin.com/in/thrinadha-rao-gancheeri-09bb9226a'>LinkedIn</a>
           &nbsp&nbsp&nbsp
           <span>|</span>
           &nbsp&nbsp&nbsp
           <p style="font-size:15px;color:white">gancheerithrinadharao@gmail.com</p>
           </h3>
        </div>
        <h1>${xhr.response['items'][1]['data']['accounts'][0]['userPrincipalName']}</h1>`;
        id.insertAdjacentHTML('beforeend',html);
    } else {
        console.error('Request failed:', xhr.status);
    }
};
xhr.onerror = () => {
    console.error('Network error');
};
xhr.send();
}

