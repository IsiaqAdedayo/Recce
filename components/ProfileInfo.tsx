import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faPlus,
  faPen,
  faTrash,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const ProfileInfo = () => {
    return (
        <div className="col-span-3 lg:col-span-2 bg-white rounded pb-10 lg:pb-0 ml-6 md:ml-0">
            <div className="flex justify-between items-center bg-blue-100 pt-4 px-5">
                <div className="flex justify-between items-center pb-0 font-bold text-blue-300 space-x-5 overflow-x-scroll xl:overscroll-x-none xl:overflow-x-hidden text-sm lg:text-base">
                    <h1 className="cursor-pointer active:text-indigo-600 pb-5 border-b-4 border-transparent hover:border-indigo-600">TImeline</h1>
                    <h1 className="cursor-pointer active:text-indigo-600 pb-5 border-b-4 border-transparent hover:border-indigo-600">Notes</h1>
                    <h1 className="cursor-pointer active:text-indigo-600 pb-5 border-b-4 border-transparent hover:border-indigo-600">Events</h1>
                    <h1 className="cursor-pointer active:text-indigo-600 pb-5 border-b-4 border-transparent hover:border-indigo-600">Tasks</h1>
                    <h1 className="cursor-pointer text-indigo-600 border-b-4 border-indigo-600 pb-5">Deals</h1>
                    <h1 className="cursor-pointer active:text-indigo-600 pb-5 border-b-4 border-transparent hover:border-indigo-600">Campaigns</h1>
                    <h1 className="cursor-pointer active:text-indigo-600 pb-5 border-b-4 border-transparent hover:border-indigo-600">Web Stats</h1>
                    <h1 className="cursor-pointer active:text-indigo-600 pb-5 border-b-4 border-transparent hover:border-indigo-600">Mail</h1>
                    <h1 className="cursor-pointer active:text-indigo-600 pb-5 border-b-4 border-transparent hover:border-indigo-600">Documents</h1>
                </div>

                <div className="space-x-1 flex pb-5">
                    <div className="bg-white flex items-center h-6 px-2 rounded text-indigo-500 cursor-pointer">
                        <FontAwesomeIcon icon={faCaretLeft} className="h-5" />
                    </div>
                    <div className="bg-white flex items-center h-6 px-2 rounded text-indigo-500 cursor-pointer">
                        <FontAwesomeIcon icon={faCaretRight} className="h-5" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-8 px-5 items-center">
                <h1 className="font-semibold">Deals (5)</h1>
                <div className="flex items-center space-x-3 py-1 px-2 cursor-pointer text-blue-400 bg-blue-200 rounded">
                    <FontAwesomeIcon icon={faPlus} className="h-4"/>
                    <p className="font-bold">Add</p>
                </div>
            </div>

            <div className="flex flex-col items-center space-y-10 pt-10">
                <div className="flex flex-col md:flex-row justify-between group w-full pt-4 pl-1 pr-3 md:px-5 rounded md:items-center border-l-4 border-blue-800 space-y-6 md:space-y-0">
                    <div className="flex space-x-3">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-green-500 text-white font-bold flex justify-center items-center">BJ</div>
                        <div className="text-sm md:text-base space-y-1">
                            <h1>Deal will go here...</h1>
                            <h1>Deal explanation will go here if needed.</h1>
                            <div className="flex text-xs justify-between space-x-2 md:text-sm ">
                                <h1 className="">$ 212 347 222</h1>
                                <div className="flex justify-between items-center space-x-3">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="h-5" />
                                    <h1>4 months ago</h1>
                                    <div className="flex space-x-1">
                                        <img
                                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                            alt="profileDisplay"
                                            className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                                        />
                                        <div className="w-4 h-4 md:w-5 md:h-5 text-center rounded-full bg-green-500 text-white flex justify-center items-center"><h1 className="text-xs">CM</h1></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:space-x-1 pb-5 hidden group-hover:flex pl-14 md:pl-0 space-x-20">
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faPen} className="h-5" />
                        </div>
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} className="h-5" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between group w-full pt-4 pl-1 pr-3 md:px-5 rounded md:items-center border-l-4 border-red-400 space-y-6 md:space-y-0">
                    <div className="flex space-x-3">
                        <div className="">
                            <img
                                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                alt="profileDisplay"
                                className="w-10 h-10 md:w-14 md:h-14 rounded-full"
                            />
                        </div>
                        <div className="text-sm md:text-base space-y-1">
                            <h1>Deal for the property in Malibu with Casey Brother Real Estate</h1>
                            <h1>Deal explanation will go here if needed.</h1>
                            <div className="flex text-xs space-x-5 md:text-sm">
                                <h1>$ 212 347 222</h1>
                                <div className="flex justify-between items-center space-x-3">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="h-5" />
                                    <h1>4 months ago</h1>
                                    <div className="flex space-x-1">
                                        <img
                                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                            alt="profileDisplay"
                                            className="w-5 h-5 rounded-full"
                                        />
                                        <div className="w-4 h-4 md:w-5 md:h-5 text-center rounded-full bg-green-500 text-white flex justify-center items-center"><h1 className="text-xs">CM</h1></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:space-x-1 pb-5 hidden group-hover:flex pl-14 md:pl-0 space-x-20">
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faPen} className="h-5" />
                        </div>
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} className="h-5" />
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between group w-full pt-4 pl-1 pr-3 md:px-5 rounded md:items-center border-l-4 border-gray-400 space-y-6 md:space-y-0">
                    <div className="flex space-x-3">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-yellow-600 text-white font-bold flex justify-center items-center">RO</div>
                        <div className="text-sm md:text-base space-y-1">
                            <h1>Deal will go here...</h1>
                            <h1>Deal explanation will go here if needed.</h1>
                            <div className="flex text-xs justify-between space-x-2 md:text-sm">
                                <h1>$ 212 347 222</h1>
                                <div className="flex justify-between items-center space-x-3">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="h-5" />
                                    <h1>4 months ago</h1>
                                    <div className="flex space-x-1">
                                        <img
                                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                            alt="profileDisplay"
                                            className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                                        />
                                        <div className="w-4 h-4 md:w-5 md:h-5 text-center rounded-full bg-green-500 text-white flex justify-center items-center"><h1 className="text-xs">CM</h1></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:space-x-1 pb-5 hidden group-hover:flex pl-14 md:pl-0 space-x-20">
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faPen} className="h-5" />
                        </div>
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} className="h-5" />
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between group w-full pt-4 pl-1 pr-3 md:px-5 rounded md:items-center border-l-4 border-green-500 space-y-6 md:space-y-0">
                    <div className="flex space-x-3">
                        <div className="">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                alt="profileDisplay"
                                className="w-10 h-10 md:w-14 md:h-14 rounded-full"
                            />
                        </div>
                        <div className="text-sm md:text-base space-y-1">
                            <h1>Deal for the property in Malibu with Casey Brother Real Estate</h1>
                            <h1>Deal explanation will go here if needed.</h1>
                            <div className="flex text-xs space-x-5 md:text-sm">
                                <h1>$ 212 347 222</h1>
                                <div className="flex justify-between items-center space-x-3">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="h-5" />
                                    <h1>4 months ago</h1>
                                    <div className="flex space-x-1">
                                        <img
                                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                            alt="profileDisplay"
                                            className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                                        />
                                        <div className="w-4 h-4 md:w-5 md:h-5 text-center rounded-full bg-green-500 text-white flex justify-center items-center"><h1 className="text-xs">CM</h1></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:space-x-1 pb-5 hidden group-hover:flex pl-14 md:pl-0 space-x-20">
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faPen} className="h-5" />
                        </div>
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} className="h-5" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between group w-full pt-4 pl-1 pr-3 md:px-5 rounded md:items-center border-l-4 border-purple-300 space-y-6 md:space-y-0">
                    <div className="flex space-x-3">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-purple-500 text-white font-bold flex justify-center items-center">DJ</div>
                        <div className="text-sm md:text-base space-y-1">
                            <h1>Deal will go here...</h1>
                            <h1>Deal explanation will go here if needed.</h1>
                            <div className="flex text-xs justify-between space-x-2 md:text-sm">
                                <h1>$ 212 347 222</h1>
                                <div className="flex justify-between items-center space-x-3">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="h-5" />
                                    <h1>4 months ago</h1>
                                    <div className="flex space-x-1">
                                        <img
                                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                            alt="profileDisplay"
                                            className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                                        />
                                        <div className="w-4 h-4 md:w-5 md:h-5 text-center rounded-full bg-green-500 text-white flex justify-center items-center"><h1 className="text-xs">CM</h1></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:space-x-1 pb-5 hidden group-hover:flex pl-14 md:pl-0 space-x-20">
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faPen} className="h-5" />
                        </div>
                        <div className="bg-white flex items-center h-6 px-2 rounded text-blue-400 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} className="h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
