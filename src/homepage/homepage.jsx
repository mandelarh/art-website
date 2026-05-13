import Name from './name.jsx'; // This creates the variable 'Name'
import C_exhibition from './C_exhibition.jsx';
import P_exhibition from './P_exhibition.jsx';
import ArtistSubmissions from './ArtistSubmissions.jsx';
import MissionStatement from './MissionStatement.jsx';
const Home = () => {
  return (
    <main>
      <Name />  {/* Changed from <Hero /> to <Name /> */}
      <C_exhibition />
      <P_exhibition />
      <ArtistSubmissions />
      <MissionStatement />

    </main>
  );
};
export default Home;