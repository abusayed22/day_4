import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { pre_edit_update, pre_go_edit } from '../../redux/actions/action'

function Single() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const  [single,setSingle] = useState({
        name:'',
        roll:'',
        birth:'',
        phone:'',
        address:''
    })
    useEffect(() => {
        dispatch(pre_go_edit(id))
    },[])
    const singleInfo = useSelector(state => state.reducers.user)

useEffect(() => {
    setSingle({...single && singleInfo})
},[singleInfo])

const updatehandler = () => {
    dispatch(pre_edit_update(id,single))
    navigate('/all_students')
}

  return (
    <div style={{width:'350px',margin:'0 auto'}}>
        <form action="">
            <input style={{width:350,margin:'10px 0'}} value= {single.name || ''} onChange={(e) => setSingle({...single,name:e.target.value})} type="text" placeholder='Enter full Name..' />
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <input style={{width:120,margin:'10px 0'}} value= {single.roll || ''} onChange={(e) => setSingle({...single,roll:e.target.value})} type="number" placeholder='Roll:' />
            <input style={{width:200,margin:'10px 0'}} value= {single.birth || ''} onChange={(e) => setSingle({...single,birth:e.target.value})} type="date" placeholder='Brith Day:' />
            </div>
            <input style={{width:350,margin:'10px 0'}}  value= {single.phone || ''} onChange={(e) => setSingle({...single,phone:e.target.value})} type="number" placeholder='Phone Number' />
           
            <textarea style={{width:350}} value= {single.address || ''} onChange={(e) => setSingle({...single,address:e.target.value})} id="w3review" name="w3review" rows="4" cols="50" placeholder='Address'/>

            <button onClick={() =>updatehandler()} style={{width:80,margin:'10px 0'}} type="button" className="btn btn-info">Add</button>
          </form>
    </div>
  )
}

export default Single