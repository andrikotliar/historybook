class Interpreter {
  constructor(wrapperId, updateState) {
    this.wrapperId = wrapperId;
    this.attrsToKeep = ['rowspan', 'colspan'];
    this.editableElement = null;
    this.updateState = updateState;
  }

  removeAttrs(element) {
    const attributes = Array.from(element.attributes);

    attributes.forEach((attr) => {
      if (!this.attrsToKeep.includes(attr.name)) {
        element.removeAttribute(attr.name);
      }
    });
  }

  removeAttrsFromChildren(element) {
    removeAttrs(element);

    const children = Array.from(element.children);

    if (children.length) {
      children.forEach((child) => {
        this.removeAttrsFromChildren(child);
      });
    }
  }

  registerEditorPasteListener() {
    const wrapper = document.getElementById(this.wrapperId);

    if (!wrapper) {
      console.error('Wrapper not found!');

      return;
    }

    const tableWrapper = wrapper.querySelector('.table-wrapper');

    this.editableElement?.addEventListener('paste', (event) => {
      event.preventDefault();

      const rawHtml = event.clipboardData.getData('text/html');

      const parser = new DOMParser();

      const parsedHTML = parser.parseFromString(rawHtml, 'text/html');

      const tableBody = parsedHTML.querySelector('tbody');

      if (!tableBody) {
        return rawHtml;
      }

      const table = document.createElement('table');

      removeAttrsFromChildren(tableBody);

      table.append(tableBody);

      tableWrapper.append(table);
    });
  }

  createModalWindow() {
    const modalWindow = document.createElement('div');

    modalWindow.setAttribute(
      'style',
      'width: 100%; height: 100%; position: fixed; top: 0; left: 0;display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.8); z-index: 9999;',
    );

    return modalWindow;
  }

  createContentWrapper() {
    const contentWrapper = document.createElement('div');

    contentWrapper.setAttribute(
      'style',
      'min-width: 700px; min-height: 300px; background-color: #fff; border-radius: 5px;',
    );

    return contentWrapper;
  }

  init() {
    const modalWindow = this.createModalWindow();
    const contentWrapper = this.createContentWrapper();

    modalWindow.append(contentWrapper);
    document.body.append(modalWindow);
  }
}

const EditableBlock = createClass({
  getInitialState: function () {
    return {
      isTableAdded: false,
    };
  },

  updateTableState: function () {
    this.setState({ isTableAdded: true });
  },

  triggerInterpreter: function () {
    const modal = new Interpreter(
      this.props.forID,
      this.updateTableState.bind(this),
    );

    modal.init();
  },

  render: function () {
    return h(
      'div',
      {
        id: this.props.forID,
        className: this.props.classNameWrapper,
      },
      h(
        'div',
        {
          className: 'buttons-wrapper',
          style: { display: 'flex', gap: 10 },
        },
        !this.state.isTableAdded
          ? h('button', { onClick: this.triggerInterpreter }, 'Add table')
          : null,
        this.state.isTableAdded
          ? h('button', { onClick: this.triggerInterpreter }, 'Remove table')
          : '',
      ),
      h('div', { className: 'table-wrapper' }),
    );
  },
});
