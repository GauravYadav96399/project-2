import React from 'react';
import { Formik, FieldArray, Field,Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const CreateCard = () => {
  return (
    
    <Formik
      initialValues={{ createTitle: '', addNotes: '', dynamicFields: [] }}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ values, handleSubmit }) => (
        <Form>
            
          
         <Link to="/list">
              <Button type="submit"> CardList </Button>
          </Link>
    
          {/* Static fields */}
          <label htmlFor="createTitle">Create Title</label>
          <Field id="createTitle" name="createTitle" type="text" placeHolder="Add your Title here..." />

          <label htmlFor="addNotes">Add Notes</label>
          <Field id="addNotes" name="addNotes" type="text"  placeHolder="Add your notes here..."/>

          {/* Dynamic fields */}
          <FieldArray name="dynamicFields">
            {({ insert, remove, push }) => (
              <div>
                
                {values.dynamicFields &&
                  values.dynamicFields.length > 0 &&
                  values.dynamicFields.map((field, index) => (
                    <div key={index} >
                    <span> {index+1} </span>
                      <label htmlFor={`dynamicFields[${index}].title`}>
                        Title
                      </label>
                      <Field
                        id={`dynamicFields[${index}].title`}
                        name={`dynamicFields[${index}].title`}
                        type="text"
                        placeHolder="Enter Card's Title..."
                      />

                      <label htmlFor={`dynamicFields[${index}].description`}>
                        Description 
                      </label>
                      <Field
                        id={`dynamicFields[${index}].description`}
                        name={`dynamicFields[${index}].description`}
                        type="text"
                        placeHolder="Enter Card's Description..."
                      />

                      <button
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() =>
                    push({ title: '', description: '' })
                  }
                >
                  Add
                </button>

                
              </div>
            )}
          </FieldArray>

          {/* Submit button */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>

  );
};

export default CreateCard;