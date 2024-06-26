
import { FaLocationDot, FaDollarSign } from "react-icons/fa6";

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite,  location, job_type, salary} = job;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90fE] mr-4 ">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90fE] mr-4 ">{job_type}</button>
                    </div>
                    <div className="flex gap-10">
                        <h2 className="flex items-center gap-1"><FaLocationDot></FaLocationDot>{location}</h2>
                        <h2 className="flex items-center gap-1"><FaDollarSign></FaDollarSign>{salary}</h2>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;