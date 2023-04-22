const form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi =(weight/ (height * height )).toFixed(2);

    const value = document.getElementById('value');
    let description ='';

    value.classList.add('attention');

    document.getElementById('infos'.classList.remove('hidden'));

    if(bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso! Se cuide e volte mais bombado.'   
    }else if (bmi >=18,5 && bmi <= 25){
         description = 'Você está no caminho certo, adicione mais peso na academia!'
         value.classList.remove('attention');
         value.classList.add('normal');
    }else if (bmi >25 && bmi <= 30){
        description = 'Cuidado! Você está com sobrepeso, matricule-se na academia pra ontem!'
   }else if (bmi >30 && bmi <= 35){
    description = 'Cuidado! Você está com obseidade moderada! Não vacile e cuide da sua saúde!'
}else if (bmi >35 && bmi <= 40){
    description = 'Cuidado! Você está com obsidade severa! Procure um profissional de saúde.'
}else{
    description = 'Cuidado! Você está com morbida, pare de seguir a Thais Carla!'
}

    value.textContent = bmi.replace('.',',');
        document.getElementById('description').textContent = description;

});
