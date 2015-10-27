

function changeText(name) {
  try {
    hide(name+'-text');
    show(name+'-edit');

    document.getElementById(name).focus();

    hide(name+'-change');
    show(name+'-update');

  } catch(e) {
    alert(e.errorMessage);
  }
}

function updateText(name) {
  try {
    var newValue = document.getElementById(name).value;
    document.getElementById(name+'-text').innerHTML = newValue;

    hide(name+'-edit');
    show(name+'-text');

    hide(name+'-update');
    show(name+'-change');

  } catch(e) {
    alert(e.errorMessage);
  }
}

function next() {
  window.location.href = 'confirmation';
}

function handle(element) {
  document.getElementById('continue').disabled = (!(element.checked));
}

