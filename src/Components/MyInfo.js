import './MyInfo.css'
export default function MyInfo(){
    return(
        <div classname='containMyInfo'>
            <div className='childMyInfo'>
                <div className='formMyinfo'>
                <div className='detailsMyinfo'>
                    <input type='text' placeholder='Jane'  className='inpt-Save'/>
                    <input type='text' placeholder='Doe'  className='inpt-Save'/>
                    <input type='email' placeholder='toto@exemple.com'  className='inpt-Save'/>
                    <input list="gender-options" id="gender" name="gender"  placeholder='Female'  className='inpt-Save'/>
                    <datalist id="gender-options">
                    <option value="male"></option>
                    <option value="female"></option>
                    </datalist>
                    <input type="date" id="birthdate" name="birthdate"  className='inpt-Save' />
                    <input type='tel' placeholder='0600452864' className='inpt-Save'/>
                    <input type='text' placeholder='Casablanca'  className='inpt-Save' />
                    <input type='password' placeholder='Password' className='inpt-Save' />
                </div>
                <button className='btn-infoSave'>Save</button>
                </div>
            </div>
        </div>
    );
}