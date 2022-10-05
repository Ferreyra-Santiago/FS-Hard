import React from 'react'

const Contact = () => {
  return (
<div className='m-auto'>
<div class="flex items-center justify-center p-12">
  <div class="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Nombre
        </label>
        <input
          type="text"
          name="name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Apellido
        </label>
        <input
          type="email"
          name="email"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
            <label
                for="dni"
                className="mb-3 block text-base font-medium text-[#07074D]"
                >
                Email
            </label>
            <input
                type="email"
                name="dni"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
            <label
                for="telefono"
                className="mb-3 block text-base font-medium text-[#07074D]">
                Telefono
            </label>
            <input
                type="number"
                name="telefono"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            </div>
        </div>
        </div>
        <textarea
          rows="4"
          name="message"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>
</div>
  )
}

export default Contact