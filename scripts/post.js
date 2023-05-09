// edit functionality in page 

var flag = 0;

function editThePage() {
    if (flag == 0) {

        //edit button change into save button
        document.getElementById('editButton').innerHTML = 'Save <i class="fa fa-floppy-o" aria-hidden="true"></i>'

        // title code for editing
        let title = document.getElementById('pageMainTitle').innerHTML;
        document.getElementById('pageMainTitle').innerHTML = '';
        document.getElementById('titleArea').value = title;
        document.getElementById('titleArea').style.display = 'block';


        //content code for editing

        let content = document.getElementById('pageMainContent').innerHTML;
        document.getElementById('pageMainContent').innerHTML = '';
        document.getElementById('contentTextArea').value = content;
        document.getElementById('contentTextArea').style.display = 'block';


        //adding color to the border 
        document.getElementById('titleBox').style.border = '2px solid pink'

        document.getElementById('pageMainContent').style.border = '2px solid pink'

        flag = 1;
    }
    else if (flag == 1) {
        //changing save button to edit button
        document.getElementById('editButton').innerHTML = 'Edit <i id="saveButton" class="fa fa-pencil-square-o" aria-hidden="true">';

        //title of the post
        let title = document.getElementById('titleArea').value;
        document.getElementById('titleArea').style.display = 'none';
        document.getElementById('pageMainTitle').innerHTML = title;
        document.getElementById('pageMainTitle').style.display = 'block';

        //content of the post 

        let content = document.getElementById('contentTextArea').value;
        document.getElementById('contentTextArea').style.display = 'none';
        document.getElementById('pageMainContent').innerHTML = content;
        document.getElementById('pageMainContent').style.display = 'block';


        //remove pink border

        document.getElementById('titleBox').style.border = 'none';
        document.getElementById('pageMainContent').style.border = 'none';

        flag =0;
    }
}





//like and comment functionality here
var like = 1;
function showNumOfLike() {

    var template = '<i class="fa fa-thumbs-o-up" aria-hidden="true" onclick="showNumOfLike()">Liked</i>' +
        '<div id="showLike">' + '<p>' +
        like + ' person likes this!' + '<p>' +
        '</div>';

    document.getElementsByClassName('like')[0].innerHTML = template;
    like++;
}

function addComment(text) {
    var template = '<div class="commentme">' +
        text.value +
        '</div>';
    if (text.value.length > 0) {
        document.getElementsByClassName('showCommentHere')[0].innerHTML += template;
        text.value = text.defaultValue;
    }

}
