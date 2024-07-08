'use client'
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { newParticipant } from '../types'
import { addParticipant } from '../dbCalls'

const Forms = () => {
  const [newParticipant, setNewParticipant] = useState<newParticipant>({
    name: '',
    is_user: false,
    photo: '',
  });

  const handleAdd = async(e: React.FormEvent<HTMLButtonElement>, payload: newParticipant) => {
if(newParticipant.name === ''|| newParticipant.photo === ''){
    console.log("returned, Form inputs invalid")
    return;
}
else{
          addParticipant(e,payload)
}
 setNewParticipant({ 
  name: '',
  is_user: false,
  photo: '',})
  }

  return (
    <React.Fragment>
      <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
        <div className="p-5">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-lg font-medium mb-2">Participant Form</h1>
            <Link href="/" className="text-slate-400">
              Back Home
            </Link>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
              value={newParticipant.name}
              onChange={(e)=>setNewParticipant({...newParticipant, name:e.target.value})}
                type="text"
                id="name"
                name="name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="is_user"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Is User?
              </label>
              <input
               value={newParticipant.is_user}
               onChange={(e)=>setNewParticipant({...newParticipant, is_user:Boolean(e.target.value)})}
                type="boolean"
                id="is_user"
                name="is_user"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Photo
              </label>
              <input
              value={newParticipant.photo}
              onChange={(e)=>setNewParticipant({...newParticipant, name:e.target.value})}
                type="text"
                id="photo"
                name="photo"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={(e) => {e.preventDefault(), handleAdd(e , newParticipant), console.log("click")}}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Forms;
