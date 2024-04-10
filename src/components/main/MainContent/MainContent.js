import { videos } from '../../dataMain';

const MainContent = () => {
    return (
        videos.map(videosObj => {
            return (
                <a href={videosObj.url} target="_blank">
                    <div className='App-main-videoCont'>
                        <div className='App-main-videoCont-video'>
                            <img className='video-img' src={videosObj.img} />
                        </div>
                        <div className='App-main-videoCont-title'>
                            {videosObj.title}
                            </div>
                    </div>
                </a>
            )
        })
    )
};
export default MainContent;