import { Grid } from '@material-ui/core'


import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'

const Home = () => {
    return ( 
        <>
        <Banner />
        <Grid container>
            <Grid items lg={2} xs={12} sm={2}>
                <Categories />
            </Grid>
            <Grid items container lg={10} xs={12} sm={10}>
                 <Posts />
            </Grid>
        </Grid>
        </>
    )
}

export default Home