'use client'
import { CldUploadWidget } from 'next-cloudinary';
import UploadWidget from '@/app/components/(auth)/uploadWidget';
import { useState } from 'react';
import { useFormState } from "@/app/utility/FormContext"

export default function UploadPic() {

      const [imageSrc, setImageSrc] = useState();
      const [uploadData, setUploadData] = useState();

      const { onHandleNext, formData} = useFormState()

      const{username} = formData
    
      /**
       * handleOnChange
       * @description Triggers when the file input changes (ex: when a file is selected)
       */
    
      function handleOnChange(changeEvent) {
        const reader = new FileReader();
    
        reader.onload = function(onLoadEvent) {
          setImageSrc(onLoadEvent.target.result);
          setUploadData(undefined);
        }
    
        reader.readAsDataURL(changeEvent.target.files[0]);
      }
    
      /**
       * handleOnSubmit
       * @description Triggers when the main form is submitted
       */
    
      async function handleOnSubmit(event) {
        event.preventDefault();
    
        const form = event.currentTarget;
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');
    
        const formData = new FormData();
    
        for ( const file of fileInput.files ) {
          formData.append('file', file);
        }
        
        formData.append('public_id', username);
        formData.append('upload_preset', 'caramel-test');
    
        const data = await fetch('https://api.cloudinary.com/v1_1/dy3hecuzo/image/upload', {
          method: 'POST',
          body: formData
        }).then(r => r.json());
    
        setImageSrc(data.secure_url);
        setUploadData(data);

        onHandleNext()
      }
    
      return (
        <div className="">
    
          <main className="">
            <h1 className="">
              ADD A PROFILE PICTURE
            </h1>

            <img src={imageSrc} />
    
            <form className="" method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
            
              <input id="fileInput" type="file" name="file" />
              
          
            
              {imageSrc && !uploadData && (
                <p>
                  <button>Next</button>
                </p>
              )}
    
              {/* {uploadData && (
                <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
              )} */}
            </form>
          </main>
        </div>
      )
    }
    
