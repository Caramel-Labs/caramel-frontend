import getData from './utility/getData.js'

export default async function Profile(){

    const profileEndpoint = ''
    const data = getData(profileEndpoint)

    return(
        <div>
         <h1> Profile page</h1>
        </div>
    )
}