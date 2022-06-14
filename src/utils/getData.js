import { getDatabase, ref ,child, get} from "firebase/database";
 
export const getData = async (path) => {
	const dbRef = ref(getDatabase());
	const snapshot = await get(child(dbRef, `/${path}`));
	
	if(snapshot.exists()){
		const responce = snapshot.val()
		const data = Object.values(responce)
		return data
	} 
}