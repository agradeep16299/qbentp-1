{/*import React,{useEffect} from 'react';
import { Formik, Field, Form, useField, useFormikContext } from 'formik';

const RoleField = (props) => {
  const {
    values: { role },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  useEffect(() => {
    // set the value of textC, based on textA and textB
    if (
      role.trim() !== '' &&
      touched.role
      
    ) {
      setFieldValue(props.name, `role:${role.name}}`);
    }
  }, [role, touched.role,  setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};
export default RoleField;*/}