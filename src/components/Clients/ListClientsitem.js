import React, {Component} from 'react';

class ListClientsitem extends Component {

    render(){
        let {rowClass, image, imgLogo, nameClient, dClient, item1, item2, item3} = this.props;
        return(
            <div id={nameClient} className={`row list_clients_item align-items-center ${rowClass}`}>
                <div className="col-lg-6">
                    <div className="list_clients_img">
                        <img src={require ("../../img/clients/" + image).default} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="list_clients_content">
                        <div className="hosting_title">
                            
                            <img className="pb-3" src={require ("../../img/clients/" + imgLogo).default} alt=""/>
                            <p>{dClient}.</p>
                        </div>
                        <div>
                            <ul className="list_clients_list">
                                <li>{item1}</li>
                                <li>{item2}</li>
                                <li>{item3}</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListClientsitem;