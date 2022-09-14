import request from '../../utils/requests/request';
import Main from '../../components/main/main.component';
import Row from '../../components/row/row.component';

const Home = () => {
    return (
        <div> 
            <Main/>
            <Row rowID='1' title='Up Coming' fetchURL={request.requestUpcoming}/>
            <Row rowID='2' title='Popular' fetchURL={request.requestPopular}/>
            <Row rowID='3' title='Trending' fetchURL={request.requestTrending}/>
            <Row rowID='4' title='Top Rated' fetchURL={request.requestTopRated}/>
            <Row rowID='5' title='Horror' fetchURL={request.requestHorror}/>
        

        </div>
    );
};

export default Home;