import request from '../../utils/requests/request';
import Main from '../../components/main/main.component';
import Row from '../../components/row/row.component';

const Home = () => {
    return (
        <div> 
            <Main/>
            <Row title='Up Coming' fetchURL={request.requestUpcoming}/>
            <Row title='Popular' fetchURL={request.requestPopular}/>
            <Row title='Trending' fetchURL={request.requestTrending}/>
            <Row title='Top Rated' fetchURL={request.requestTopRated}/>
            <Row title='Horror' fetchURL={request.requestHorror}/>
          

        </div>
    );
};

export default Home;