const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const renderPopup = (template) => {
  const node = template.cloneNode(true);
  document.body.appendChild(node);

  const onClose = () => {
    node.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  const onNodeClick = () => onClose();

  function onDocumentKeydown (evt) {
    if (evt.key === 'Escape') {
      onClose();
    }
  }

  node.addEventListener('click', onNodeClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderSuccessPopup = () => {
  renderPopup(successTemplate);
};

const renderErrorPopup = () => {
  renderPopup(errorTemplate);
};

export {renderSuccessPopup, renderErrorPopup};
