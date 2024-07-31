const RsvpForm = ({formData, error, handleChange, success, handleSubmit}) => {
    return (
        <form id="rsvp-form" onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center space-y-6 w-[100vw] h-[740px] bg-[#646C64]/[0.9] p-[30px] text-[#FFFDF2] font-lato px-4 mt-16 lg:mt-0">
            <p className="text-[30px] font-fredoka text-center lg:text-left font-bold">Will you join us for the birthday
                celebration?</p>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="flex flex-col justify-center items-start space-y-4">
                <p className="text-[14px] text-left">Name <span className="text-[14px] pb-[5px]">*</span></p>
                <input name="name" value={formData.name} onChange={handleChange}
                       className="w-[90vw] lg:w-[400px] h-[50px] px-[15px] rounded-[10px] border-[#646C64] border-[1px]"
                       type="text"/>
            </div>
            <div className="flex flex-col justify-center items-start space-y-4">
                <p className="text-[14px]">Phone number <span className="text-[14px] pb-[5px]">*</span></p>
                <input name="phone" value={formData.phone} onChange={handleChange}
                       className="w-[90vw] lg:w-[400px] h-[50px] px-[15px] rounded-[10px] border-[#646C64] border-[1px]"
                       type="text"/>
            </div>
            <div className="flex flex-col justify-center items-start space-y-4">
                <p className="text-[14px]">Email address <span className="text-[14px] pb-[5px]">*</span></p>
                <input name="email" value={formData.email} onChange={handleChange}
                       className="w-[90vw] lg:w-[400px] h-[50px] px-[15px] rounded-[10px] border-[#646C64] border-[1px]"
                       type="text"/>
            </div>
            <div className="flex flex-col justify-center items-start space-y-4">
                <p className="text-[14px]">Allergies</p>
                <input name="allergies" value={formData.allergies} onChange={handleChange}
                       className="w-[90vw] lg:w-[400px] h-[50px] px-[15px] rounded-[10px] border-[#646C64] border-[1px]"
                       type="text"/>
            </div>
            <button type="submit"
                    className="flex-shrink-0 rounded-[10px] w-[100px] h-[50px] font-lato text-[14px] rsvp flex justify-center items-center text-white">
                Submit
            </button>
        </form>
    )
}

export default RsvpForm;