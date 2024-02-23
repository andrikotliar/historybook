class Interpreter {
  constructor(onChange) {
    this.onChange = onChange;

    this.attrsToKeep = ['rowspan', 'colspan'];

    this.modalWrapperElement = null;
    this.editableElement = null;
    this.tableHtml = null;
  }

  removeAttrs(element) {
    const attributes = Array.from(element.attributes);

    attributes.forEach((attr) => {
      if (!this.attrsToKeep.includes(attr.name)) {
        element.removeAttribute(attr.name);
      }
    });
  }

  sanitizeTableElements(element) {
    this.removeAttrs(element);

    const children = Array.from(element.children);

    if (children.length) {
      children.forEach((child) => {
        this.sanitizeTableElements(child);
      });
    }
  }

  registerEditorPasteListener() {
    this.editableElement?.addEventListener('paste', (event) => {
      event.preventDefault();

      const rawHtml = event.clipboardData.getData('text/html');

      const parser = new DOMParser();

      const parsedHTML = parser.parseFromString(rawHtml, 'text/html');

      const table = parsedHTML.querySelector('table');

      if (!table) {
        alert('Table not found.');
        return;
      }

      this.sanitizeTableElements(table);

      this.editableElement.append(table);

      this.tableHtml = table.outerHTML;
    });
  }

  createModalWindow() {
    const modalWindow = document.createElement('div');

    modalWindow.setAttribute(
      'style',
      'width: 100%; height: 100%; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.8); z-index: 9999;',
    );

    this.modalWrapperElement = modalWindow;

    return modalWindow;
  }

  createContentWrapper() {
    const contentWrapper = document.createElement('div');

    contentWrapper.setAttribute(
      'style',
      'min-width: 700px; min-height: 300px; background-color: #fff; border-radius: 5px; padding: 10px;',
    );

    return contentWrapper;
  }

  createEditableBlock() {
    const editableBlock = document.createElement('div');

    editableBlock.contentEditable = true;
    editableBlock.setAttribute(
      'style',
      'border: 2px solid #000; color: #000; border-radius: 5px; min-height: 280px; padding: 10px;',
    );

    this.editableElement = editableBlock;

    return editableBlock;
  }

  saveTable() {
    if (!this.tableHtml) {
      alert(
        'Table element does not exist. Paste table into the editable area!',
      );
      return;
    }

    if (!this.onChange) {
      alert('onChange prop is not present');
      this.cancel();
      return;
    }

    this.onChange(this.tableHtml);

    this.cancel();
  }

  cancel() {
    this.modalWrapperElement.remove();
  }

  createToolbar() {
    const toolbar = document.createElement('div');
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    saveButton.addEventListener('click', this.saveTable.bind(this));
    cancelButton.addEventListener('click', this.cancel.bind(this));

    saveButton.textContent = 'Save';
    cancelButton.textContent = 'Cancel';

    toolbar.setAttribute(
      'style',
      'display: flex; gap: 10px; margin-top: 20px;',
    );

    toolbar.append(saveButton, cancelButton);

    return toolbar;
  }

  init() {
    const modalWindow = this.createModalWindow();
    const contentWrapper = this.createContentWrapper();
    const editableBlock = this.createEditableBlock();
    const toolbar = this.createToolbar();

    contentWrapper.append(editableBlock, toolbar);
    modalWindow.append(contentWrapper);
    document.body.append(modalWindow);

    this.registerEditorPasteListener();
  }
}

const EditableBlock = createClass({
  triggerInterpreter: function () {
    const modal = new Interpreter(this.handleChange.bind(this));

    modal.init();
  },

  handleChange: function (markup) {
    this.props.onChange(markup);
  },

  render: function () {
    return h(
      'div',
      {
        id: this.props.forID,
        className: this.props.classNameWrapper,
      },
      h(
        'button',
        {
          onClick: this.triggerInterpreter,
          style: { marginBottom: 10, display: 'inline-block' },
        },
        'Add table',
      ),
      h('input', {
        className: this.props.classNameWrapper,
        value: this.props.value,
      }),
    );
  },
});
