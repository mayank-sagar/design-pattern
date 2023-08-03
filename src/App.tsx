import './App.css'
import Layout from './hoc/Layout'
import MainScreen from './navigation/MainScreen'
import InnerScreen from './navigation/InnerScreen'
import { useState } from 'react'
import { Navigation } from './constants/variables'
function App() {
	const [id, setId] = useState<Navigation>(0)
	const handleNavigationItemSelected = (id: Navigation) => setId(id)

	return (
		<>
		
			{ !id ? <MainScreen onNavigationItemSelected={handleNavigationItemSelected} /> : null }
			{
				id ? <>
					<Layout setId={setId}>
						<InnerScreen id={id} />
					</Layout>
				</> : null
			}
		</>
	)
}

export default App

