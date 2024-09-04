let final=[];//globally bcoz when new funt will be called then new arr will be created
display();
function addtodo()
{
  let input=document.querySelector('#write')
  let result=input.value;
  //console.log(result);
  final.push(result);
  //console.log(final);
  input.value='';
  display();
}
function display()
{
  let displayelement=document.querySelector('#add-item');
  // displayelement.innerText='\n'
  // displayelement.innerText=final;
  let newhtml='';
  for(let i=0;i<final.length;i++)
  {
    newhtml=newhtml+`<div>
                     <span>${final[i]}</span>
                     <button onclick="final.splice(${i},1);display()">Delete</buttton>
                     </div>`
  }
  displayelement.innerHTML=newhtml;
 }
