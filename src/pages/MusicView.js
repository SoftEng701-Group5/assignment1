/* eslint-disable */
import React, {useState,useContext,useEffect } from "react";
import Navbar from "../components/Navbar";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useHistory } from "react-router-dom";
import TaskList from "../components/global/TaskList";
import { fetchTasks } from "../services/databaseService";
import { AuthContext } from "../services/providers/authProvider";
import { CurrentTaskContext } from "../components/timer-modal/TimerContextProvider";

const  playlist=[{ name: 'Nice piano and ukulele', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/buddy.jpg', audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3', duration: '2:02' },
{ name: 'Gentle acoustic', author: 'Acoustic', img: 'https://www.bensound.com/bensound-img/sunny.jpg', audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3', duration: '2:20' },
{ name: 'Corporate motivational', author: 'Corporate', img: 'https://www.bensound.com/bensound-img/energy.jpg', audio: 'https://www.bensound.com/bensound-music/bensound-energy.mp3', duration: '2:59' },
{ name: 'Slow cinematic', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/slowmotion.jpg', audio: 'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', duration: '3:26' }]
function MusicView() {
    const { currentUser } = useContext(AuthContext);
    const [, setCurrentTask] = useContext(CurrentTaskContext);
    const [tasks, setTasks] = useState([]);
    const history = useHistory();
    const [config, setConfig] =useState({
        currentMusicIndex: 0,   
      })
      const handleClickPrevious = () => {
        setConfig({...config,currentMusicIndex: config.currentMusicIndex === 0 ? playlist.length - 1 : config.currentMusicIndex - 1,
        })
      }   
      const handleClickNext = () => {
        setConfig({
          currentMusicIndex: config.currentMusicIndex < playlist.length - 1 ? config.currentMusicIndex + 1 : 0,
        })
      }
      const handleTaskClick = (task) => {
        history.push("/dashboard");
        setCurrentTask(task);
      };
      useEffect(() => {
        fetchTasks(currentUser.uid).then((res) => {
          setTasks(res);
        });
      }, []);
    
  return (
    <>    
    <Navbar/>
    <div className="home-page--root">
      <div className="music-page">
        <img alt= "pic" src={playlist[config.currentMusicIndex].img} className='musicimg'></img>
        <span >{playlist[config.currentMusicIndex].name}</span>
        <span className="span">{playlist[config.currentMusicIndex].author}</span>
        <AudioPlayer 
        style={{
            width: '500px'
          }}
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          src={playlist[config.currentMusicIndex].audio}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
        />
      </div>
      <div className="home-page--task-list">
          <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
        </div>
      </div>
</>
  )
}

export default MusicView;
