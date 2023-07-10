import React from 'react';

const DayCategory2 = () => {
    return (
        <div>

            <div className="box_AdminUser_body_sectionA"> {/* body 1 Starts */}
            </div>

            <div className="box_DayCategory_body_sectionB"> {/* body 2 */}
                {/* <div className="DayCategory2_navigateButtons" >
                    <div class="">
                        <button _ngcontent-boi-c4="" class="DayCategory2_navigateButtons1" type="button" >Add</button>
                    </div>
                    <div class="">
                        <button _ngcontent-boi-c4="" class="DayCategory2_navigateButtons2" type="button" >Add</button>
                    </div>
                    <div class="">
                        <button _ngcontent-boi-c4="" class="DayCategory2_navigateButtons3" type="button" >Add</button>
                    </div>
                </div> */}

                <table className="table table-striped-columns">
                    <thead className="DayCategory_table_head">
                        <tr className='table_headding_row'>
                            <th className='table_head1' scope="col">Sno.</th>
                            <th className='DayCategory2_table_head1_CategoryName' scope="col">Category Name</th>
                            <th className='table_head1' scope="col">Category Image</th>
                            <th className='table_head1' scope="col">Language</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr className='DayCategory2_table_row'>
                            <td>S.no.</td>
                            <td><input type="text" maxlength="20" className='selectListInput' placeholder="Category Name" /></td>
                            <td><input type="file" className='selectListInput DayCategory2_ChooseFile' placeholder="Category Image" /></td>
                            <td><select name="" id="" className='selectListInput'>
                                <option value="">--Select Language--</option>
                                <option value="">Russian</option>
                                <option value="">Italian</option>
                            </select>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        // <div>
        //     <h1>DayCategory2 Page</h1>
        // </div>
    );
}

export default DayCategory2;