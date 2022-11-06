import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import News from '../apis/newsApi.json'
import {Link} from 'react-router-dom'
function NewsApp()
{
    var records=News
    //console.log(records)
    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <img src="https://blog.talkcharge.com/wp-content/uploads/2020/07/News-Channels.jpg" alt="newspaper"style={{height:'200px',width:'400px'}}/>
                </div>
            </div>
          <div className='row'>
            <div className='col-md-4'>
                <img src='https://img.freepik.com/premium-vector/newscaster-journalist-profession-operator-headphones-holds-camera-reporter-with-microphone-records-news-filmmaking-videotaping-interviewing-concept-cartoon-flat-vector-characters_176411-1880.jpg' alt="reporter" style={{height:'400px',width:'300px'}}/>
            </div>
            <div className='col-md-8'>
                <h1>News</h1>
                <div className='card'>
                    {records.map(e=>(
                        <>
                            <div className='card-header'>
                                <Link to={`news/${e.channel}`}>{e.channel}</Link>
                            </div>
                            <div className='card-body'>
                                {e.news}
                                <h6>Reporter Name is:{e.reporter}</h6>
                            </div>
                        </>
                    ))}
                </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default NewsApp





