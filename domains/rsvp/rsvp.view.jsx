// domains/rsvp/rsvp.view.jsx
import { useState } from "react";
import RsvpInfo from "@/domains/rsvp/rsvp.info";
import RsvpForm from "@/domains/rsvp/rsvp.form";
import useRsvp from "@/domains/rsvp/useRsvp";

const RsvpView = () => {
    const {
        formData,
        error,
        success,
        handleChange,
        handleSubmit,
        showForm,
        setShowForm
    } = useRsvp();

    return (
        <>
            <div id="rsvp"
                className="w-screen h-fit lg:h-[490px] mt-20 lg:mt-0 flex justify-center items-center relative py-[80px] bg-cover bg-center"
                style={{backgroundImage: `url('/assets/images/rsvpp.jpg')`}}>
                <div
                    className="absolute inset-0 bg-[#FFFDF2] bg-opacity-80 flex justify-center items-center h-full w-full">
                    <RsvpInfo
                        setShowForm={setShowForm}
                    />
                </div>
            </div>
            {showForm && <RsvpForm
                formData={formData}
                error={error}
                success={success}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />}
        </>
    );
}

export default RsvpView;