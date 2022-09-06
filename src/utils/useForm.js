"use strict";

function useForm(callback, initialState = {}) {
  const [values, setValues] = React.useState(initialState);

  const onChange = (onChangeEvent) => {
    switch (onChangeEvent.target.type) {
      case "file": {
        const [file] = onChangeEvent.target.files;

        if (!file) return;

        const fileReader = new FileReader();

        fileReader.onload = (readerEvent) => {
          setValues({
            ...values,
            [onChangeEvent.target.name]: readerEvent.target.result,
          });
        };

        fileReader.readAsDataURL(file);
        break;
      }

      case "checkbox": {
        setValues({
          ...values,
          [onChangeEvent.target.name]: onChangeEvent.target.checked,
        });
        break;
      }

      default: {
        setValues({
          ...values,
          [onChangeEvent.target.name]: onChangeEvent.target.value,
        });
      }
    }
  };

  const onSubmit = (e = undefined) => {
    e !== undefined && e.preventDefault();
    callback();
  };

  const updateValues = (_values) => setValues(_values);

  return {
    onChange,
    onSubmit,
    updateValues,
    values,
  };
}

module.exports = useForm;
