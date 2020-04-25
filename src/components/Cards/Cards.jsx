import React from "react";
import './Cards.css';
import CountUp from 'react-countup';

const Cards = ( { data: {confirmed, recovered, deaths, lastUpdate }} ) => {
    // console.log('props >>',props['data'].confirmed.value);
    if(!confirmed){
        return "loading..";
    }
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card contentBox">
                    <p>
                        <span className="boldtext">Coronavirus disease (COVID-19)</span> is an infectious disease 
                        caused by a newly discovered coronavirus. They are a family of 
                        viruses that range from the common cold to MERS coronavirus, which is 
                        Middle East Respiratory Syndrome coronavirus and SARs, Severe acute 
                        respiratory syndrome coronavirus.
                    </p>
                    {/* <hr/> */}
                    <p><i>Sources:</i> <span className="linkColor">https://www.who.int</span> </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card customShowBox">
                    <div className="card-header">Infected</div>
                    <div className="card-body">
                        <span className="number">
                        <CountUp start={0} end={ confirmed.value } duration={2.5} separator=","/>
                        </span>
                        <p>Number of active cases of covid 19</p>
                        <span className="dates">{ new Date(lastUpdate).toDateString() }</span>
                    </div>
                    <div className="infectedBottomDesign"></div>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card customShowBox">
                    <div className="card-header">Recovered</div>
                    <div className="card-body">
                        <span className="number"><CountUp start={0} end={ recovered.value } duration={2.5} separator=","/></span>
                        <p>Number of recovered cases of covid 19</p>
                        <span className="dates">{ new Date(lastUpdate).toDateString() }</span>

                    </div>
                    <div className="recoveredBottomDesign"></div>
                    
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card customShowBox">
                    <div className="card-header">Deaths</div>
                    <div className="card-body">
                        <span className="number"><CountUp start={0} end={ deaths.value } duration={2.5} separator=","/></span>
                        <p>Number of death cases of covid 19</p>
                        <span className="dates">{ new Date(lastUpdate).toDateString() }</span>
                    </div>
                    <div className="deathBottomDesign"></div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cards;