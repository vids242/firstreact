import React from 'react';
import Dcard from '../../component/Card/Dcard';


const Ddata = [
    {
        "id": 1,
        "name": "Dr.Meet",
        "age": 22,
        "degrees": "M.D,MBBS",
        "details": "is associated with Fortis Group Hospital (Fortis Flt. Lt. RajanDhall Hospital and Fortis Memorial Research Institute) in Delhi"

    },
    {
        "id": 2,
        "name": "Dr.Bhargav",
        "age": 25,
        "degrees": "Bds",
        "details": " is the founder and an IVF specialist of International Infertility Center. She manages all the foreign operations at the ."

    },
    {
        "id": 3,
        "name": "Dr.Het",
        "age": 29,
        "degrees": "BAMS",
        "details": "Cardiac Surgeon. Dr. Dr. Naresh Trehan is a prominent Indian cardiac surgeon who is known for his expertise in performing complex heart ."

    },
    {
        "id": 4,
        "name": "Dr.Pream",
        "age": 24,
        "degrees": "BHMS",
        "details": "is associated with BLK Super Speciality Hospital in New Delhi. He is the chairman & HOD of CTVS (Cardio-Thoracic & Vascular ..."
    },
    {
        "id": 5,
        "name": "Dr.Gaurav",
        "age": 32,
        "degrees": "BYNS",
        "details": "Director , MBBS, MS, MCh, Fellowship 20 Years of Experience Gurgaon, India."

    },
    {
        "id": 6,
        "name": "Dr.Bindiya",
        "age": 25,
        "degrees": "B.V.S",
        "details": "Dr. Bindiya Ganguly was the main female Indian doctor to graduate and practice as a doctor in Western medicine."

    },
    {
        "id": 7,
        "name": "Dr.Sruste",
        "age": 28,
        "degrees": "M.D.S",
        "details": "Dr. Sruste will constantly be associated with conveying the nation’s most memorable unnaturally conceived child"
    },
    {
        "id": 8,
        "name": "Dr.Ruhi",
        "age": 32,
        "degrees": "B.S.G",
        "details": "A trailblazer in the field of helped multiplication, Dr.Kamini’s commitments to a country that is frequently smothered with obsolete"
    },
    {
        "id": 9,
        "name": "Dr.Vedu",
        "age": 26,
        "degrees": "B.D.M,M.D",
        "details": "She is an Indian neonatologist at Sion Emergency Clinic, in Mumbai. What she is known for is running Asia’s most memorable Human Milk Bank."
    }
]

const Doctors = () => {
    return (

        <div className='container'>
            <div className='title'>
                <h2>Doctor's Data</h2>
            </div>

            <div className='flex'  id='details' >
                {

                    Ddata.map((v, i) => (
                        <Dcard Ddata={v} />

                    ))
                }
            </div>
        </div>


    );
};

export default Doctors;