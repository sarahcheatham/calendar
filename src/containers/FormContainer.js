import { connect } from 'react-redux';
import Form from '../components/Form';
import { loadPosts, createPost } from '../store/actions';

const mapStateToProps = state => {
    return {
        posts: {
            loading: state.loading,
            error: state.error,
            posts: state.posts
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadPosts: () => dispatch(loadPosts()),
        // createClassData: classdata => dispatch(createClassData(classdata)),
        createPost: newPost => dispatch(createPost(newPost))
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps) (Form);
export default FormContainer;