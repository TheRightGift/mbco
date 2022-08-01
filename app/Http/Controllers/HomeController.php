<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // if(Auth()->check()){
        //     $accessToken = Auth()->user()->accessToken;
        //     return view('dash', compact('accessToken'));
        // } else {
        //     return view('home');
        // }  

        return view('home');
    }

    // public function userProfile($userNickname){
        
    //     if(Auth()->check()){            
    //         $users = new User();
    //         $user = $users->where('nickname', $userNickname)->first();
           
    //         if($user){
    //             $names = $user['firstname'].' '.$user['lastname'];
    //             $loggedInUserId = Auth()->user()->id;
    //             return view('profile', compact('names', 'userNickname', 'loggedInUserId'));
    //         } else {
    //             return redirect('/');//please redirect to homepage
    //         }
    //     } else {
    //         return redirect('/');
    //     }  
    // }
    
    // public function userProfileDetails($userNickname){
    //     if(Auth()->check()){
    //         $users = new User();
    //         return $users->where('nickname', $userNickname)->with('images')->firstOrFail();            
    //     } else {
    //         return redirect('/');
    //     }  
    // }

    // public function getUser(){
    //     if(Auth()->check()){
    //         return Auth()->user();
    //     } else {
    //         return 401;
    //     }
    // }

    // public function getUserId(){
    //     if(Auth()->check()){
    //         return Auth()->user()->id;
    //     } 
    // }

    // public function getUserToken(){
    //     if(Auth()->check()){
    //         return Auth()->user()->accessToken;
    //     }         
    // }

    // public function getUserPic(){
    //     if(Auth()->check()){
    //         return Auth()->user()->profilePicUrl;
    //     }         
    // }

    // public function getUserProfilePic($userNickname){
    //     if(Auth()->check()){
    //         $users = new User();
    //         $user = $users->where('nickname', $userNickname)->firstOrFail(); 
    //         return $user->profilePicUrl;
    //     }         
    // }

    // public function getUserFbToken(){
    //     if(Auth()->check()){
    //         return Auth()->user()->fb_token;
    //     }         
    // }

    // public function dash()
    // {
    //     if(Auth()->check()){
    //         $accessToken = Auth()->user()->accessToken;
    //         return view('dash', compact('accessToken'));
    //     } else {
    //         return redirect('/');
    //     }  
    // }

    // public function ndienyi()
    // {
    //     if(Auth()->check()){
    //         $accessToken = Auth()->user()->accessToken;
    //         return view('friends', compact('accessToken'));
    //     } else {
    //         return redirect('/');
    //     }  
    // }

    // public function onyenchikwa()
    // {
    //     if(Auth()->check()){
    //         $accessToken = Auth()->user()->accessToken;
    //         return view('admin', compact('accessToken'));
    //     } else {
    //         return redirect('/');
    //     }  
    // }

    public function privacy(){
        return view('privacy');
    }
    
    public function fbDataDelete(){
        header('Content-Type: application/json');

        $signed_request = $_POST['signed_request'];
        $data = parse_signed_request($signed_request);
        $user_id = $data['user_id'];

        // Start data deletion

        $status_url = 'https://ndigbo.io/fbDataDelete?id=abc123'; // URL to track the deletion
        $confirmation_code = 'abc123'; // unique code for the deletion request

        $data = array(
        'url' => $status_url,
        'confirmation_code' => $confirmation_code
        );
        echo json_encode($data);

        function parse_signed_request($signed_request) {
        list($encoded_sig, $payload) = explode('.', $signed_request, 2);

        $secret = "appsecret"; // Use your app secret here

        // decode the data
        $sig = base64_url_decode($encoded_sig);
        $data = json_decode(base64_url_decode($payload), true);

        // confirm the signature
        $expected_sig = hash_hmac('sha256', $payload, $secret, $raw = true);
        if ($sig !== $expected_sig) {
            error_log('Bad Signed JSON signature!');
            return null;
        }

        return $data;
        }

        function base64_url_decode($input) {
        return base64_decode(strtr($input, '-_', '+/'));
        }
    }
}
