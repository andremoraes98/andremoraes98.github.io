const date = document.querySelector('#Data');
const statesList = document.querySelector('#Estado');
const statesBR = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const modal = new bootstrap.Modal(document.querySelector('#modal'));
const sendButton = document.querySelector('#send');
const contentModal = document.querySelector('#modal-content');
const input = document.querySelectorAll('input');
const resetButton = document.querySelector('#reset');
const confirmButton = document.querySelector('#confirm');
const cancelButton = document.querySelector('#cancel');
const validation = new JustValidate('#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    }
  }
);

// Adição dos estados no select
for (let index = 0; index < statesBR.length; index += 1) {
  const options = document.createElement('option');
  options.innerHTML = statesBR[index];
  options.value = statesBR[index];
  statesList.appendChild(options);
}

// Caixa da Data no input data
date.DatePickerX.init({
  format: 'dd/mm/yyyy'
});

// Validação dos campos do formulário
validation
  .addField('#Nome', [
    {
      rule: 'required',
      errorMessage: 'Nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O nome não pode conter mais que 40 caracteres.',
    },
  ])
  .addField('#E-mail', [
    {
      rule: 'required',
      errorMessage: 'E-mail é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O e-mail não pode conter mais que 50 caracteres.',
    },
    {
      rule: 'email',
      errorMessage: 'E-mail é inválido.',
    },
  ])
  .addField('#CPF', [
    {
      rule: 'required',
      errorMessage: 'CPF é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'O CPF não pode conter mais que 11 caracteres.',
    },
    {
      rule: 'number',
      errorMessage: 'O CPF pode conter apenas números.',
    },
  ])
  .addField('#Endereço', [
    {
      rule: 'required',
      errorMessage: 'Endereço é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 200,
      errorMessage: 'O endereço não pode conter mais que 200 caracteres.',
    },
  ])
  .addField('#Cidade', [
    {
      rule: 'required',
      errorMessage: 'Cidade é obrigatória.',
    },
    {
      rule: 'maxLength',
      value: 28,
      errorMessage: 'A cidade não pode conter mais que 28 caracteres.',
    },
  ])
  .addField('#Estado', [
    {
      rule: 'required',
      errorMessage: 'Estado é obrigatório.',
    },
  ])
  .addRequiredGroup('#tipo-de-moradia-radio-group', 'Selecione o tipo de moradia')
  .addField('#Resumo', [
    {
      rule: 'maxLength',
      value: 1000,
      errorMessage: 'O resumo do currículo não pode conter mais que 1000 caracteres.',
    },
  ])
  .addField('#Cargo', [
    {
      rule: 'required',
      errorMessage: 'Cargo é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O cargo não pode conter mais que 40 caracteres.',
    },
  ])
  .addField('#Descricao', [
    {
      rule: 'required',
      errorMessage: 'Descrição da rotina é obrigatória.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'A descrição da rotina não pode conter mais que 500 caracteres.',
    },
  ])
  .addField('#Data', [
    {
      rule: 'required',
      errorMessage: 'Data é obrigatória.',
    },
  ])
  .onSuccess(() => {
    const stateValue = document.querySelector('#Estado').value;
    const stateDiv = document.createElement('div');
    stateDiv.innerHTML = 'Estado: ' + stateValue;
    for (let index = 0; index < input.length; index += 1) {
      const newDiv = document.createElement('div');
      if (index === 5) {
        newDiv.innerHTML = 'Tipo de moradia: ' + document.querySelector('input[name="tipo-de-moradia"]:checked').value;
        contentModal.appendChild(newDiv);
        index += 1
      } else {
        newDiv.innerHTML = input[index].id + ': ' + input[index].value;
        contentModal.appendChild(newDiv);
        if (index === 4) {
          contentModal.appendChild(stateDiv);
        }
      }
    }

    modal.show();
})

resetButton.addEventListener('click', clearModal);
confirmButton.addEventListener('click', clearModal);
cancelButton.addEventListener('click', clearModal);

function clearModal() {
  contentModal.innerHTML=''
}