const input = document.querySelector('input');
const submit = document.querySelector('label');
const validate = document.querySelector('.validate');
submit.addEventListener('click', ()=>{
    
function checkEmail(input){
    
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
        if (re.test(input.value.trim())){
            // console.log('git')
            input.style.border = '1px solid #999'
           alert('You are on our newsletter list now.');
        }else{
            // console.log('nie git')
            input.style.border = '2px solid hsl(0, 93%, 68%)';
            let error = document.createElement('p');
            error.innerText = "This email address is not valid. Try again";
            let errorIcon = document.createElement('img');
            errorIcon.src = './images/icon-error.svg';
            errorIcon.alt = 'error-icon';
            errorIcon.classList.add('error-icon'); 
            validate.appendChild(error);
            validate.appendChild(errorIcon);        
            
            setTimeout(()=>{
                error.remove();
                errorIcon.remove();
            },4000)
        }

    }


checkEmail(input);
})

