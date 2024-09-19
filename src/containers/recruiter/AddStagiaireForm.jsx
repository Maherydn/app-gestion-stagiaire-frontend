import React, { useState } from 'react'
import { createStagiaire } from '../../services/recruiter/internService'
import { confirm } from '../../hooks/confirmModal/ConfirmGlobal'
import { toast } from 'react-toastify'
import { formatDate } from '../../function/FormatDate'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/commun/inputForm/Input'
import { SelectOption } from '../../components/commun/inputForm/SelectOption'

const AddStagiaireForm = () => {

    const navigate = useNavigate()

    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [university, setUniversity] = useState('')
    const [studyLevel, setStudyLevel] = useState('')
    const [intershipDuration, setInteshipDuration] = useState('')
    const [intershipStartAt, setIntershipStartAt] = useState('')
    const [intershipFinishAt, setIntershipFinishAt] = useState('') 
    const [intershipNumber, setIntershipNumber] = useState('')
    const [intershipCv, setIntership] = useState(null)
    const [intershipDemand, setIntershipDemand] = useState(null)
    const [intershipAuthorization, setIntershipAuthorization] = useState(null)

    const [departement, setDepartement] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (await confirm({ message: "Êtes-vous sûr de vouloir appliquer ces modifications au stagiaire ?" })) {
            const formData = new FormData()
            formData.append('fullName', fullName)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('university', university)
            formData.append('studyLevel', studyLevel)
            // formData.append('departement', departement)
            if (intershipCv) {
                formData.append('intershipCv', intershipCv)
            }
            if (intershipDemand) {
                formData.append('intershipDemand', intershipDemand)
            }
            // formData.append('intershipDuration', intershipDuration)
            // formData.append('intershipStartAt', intershipStartAt)
            // formData.append('intershipFinishAt', intershipFinishAt) 
            // formData.append('intershipNumber', intershipNumber)
            // if (intershipAuthorization) {
            //     formData.append('intershipAuthorization', intershipAuthorization)
            // }
            
            try {
                const res = await createStagiaire(formData)
                toast.success("Stagiaire modifié !", {
                    theme: "colored",
                })
            } catch (error) {
                console.error(error)
            }
        }
    }
    return (
        <>
           <form className="space-y-4 md:space-y-6 mx-2" onSubmit={handleSubmit}>
                <h3 className="inline-block font-semibold border-b border-black/50 lg:text-2xl text-xl">Information personnelles :</h3>
                <div className="px-10 space-y-4 md:space-y-6">
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <Input 
                                nameAndId={'nom'} 
                                type={'text'} 
                                label={'Nom'} 
                                placeholder={'Entrez votre nom'}
                                value={fullName}
                                setValue={(e) => setFullName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <Input 
                            nameAndId={'email'} 
                            type={'text'} 
                            label={'Votre email'} 
                            placeholder={'name@company.com'}
                            value={email}
                            setValue={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input 
                            nameAndId={'telephone'} 
                            type={'text'} 
                            label={'Téléphone'} 
                            placeholder={'03*********'}
                            value={phone}
                            setValue={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-3/5">
                            <Input 
                                nameAndId={'universite'} 
                                type={'text'} 
                                label={'Établissement'} 
                                placeholder={'Établissement'}
                                value={university}
                                setValue={(e) => setUniversity(e.target.value)}
                            />
                        </div>
                        <div className="w-2/5">
                            <Input 
                                nameAndId={'niveau'} 
                                type={'text'} 
                                label={'Niveau'} 
                                placeholder={'Niveau'}
                                value={studyLevel}
                                setValue={(e) => setStudyLevel(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <h3 className="inline-block font-semibold border-b border-black/50 lg:text-2xl text-xl">À propos du stage :</h3>
                <div className="px-10 space-y-4 md:space-y-6">
                    <div>
                        <SelectOption onChange={setDepartement} departement={departement} />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <Input 
                                nameAndId={'intershipCv'} 
                                type={'file'} 
                                label={'intershipCv'} 
                                placeholder={''}
                                setValue={(e) => setIntership(e.target.files[0])}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input 
                                nameAndId={'intershipDemand'} 
                                type={'file'} 
                                label={'Demande de stage'} 
                                placeholder={''}
                                setValue={(e) => setIntershipDemand(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <div>
                        <Input 
                            nameAndId={'intershipDuration'} 
                            type={'text'} 
                            label={'Durée du stage'} 
                            placeholder={''}
                            value={intershipDuration}
                            setValue={(e) => setInteshipDuration(e.target.value)}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <Input 
                                nameAndId={'intershipStartAt'} 
                                type={'date'} 
                                label={'Date de début de stage'} 
                                placeholder={''}
                                value={intershipStartAt}
                                setValue={(e) => setIntershipStartAt(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input 
                                nameAndId={'intershipFinishAt'} 
                                type={'date'} 
                                label={'Date de fin de stage'} 
                                placeholder={''}
                                value={intershipFinishAt} 
                                setValue={(e) => setIntershipFinishAt(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <Input 
                                nameAndId={'intershipNumber'} 
                                type={'text'} 
                                label={'Numéro stagiaire'} 
                                placeholder={'Numéro stagiaire'}
                                value={intershipNumber}
                                setValue={(e) => setIntershipNumber(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input 
                                nameAndId={'intershipAuthorization'} 
                                type={'file'} 
                                label={'intershipAuthorization'} 
                                placeholder={''}
                                setValue={(e) => setIntershipAuthorization(e.target.files[0])}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button type="submit" className="w-1/5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg py-2.5 text-center">
                        Modifier
                    </button>
                </div>  
            </form>
        </>
    )
}

export default AddStagiaireForm
