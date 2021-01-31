function FetchPixabay(name, page){
    return fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=19199045-2bc94f1b29c918ae7d7bc7dd7&image_type=photo&orientation=horizontal&per_page=12`).then(response =>{
        if(response.ok){
            return response.json();
        }
    })
}

export default FetchPixabay