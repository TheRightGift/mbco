<?php

namespace App\Http\Controllers;
use App\Http\Resources\Post as PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(Post::orderBy('created_at', 'DESC')->paginate(10));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = Validator::make($request->all(), [
            'post' => 'required', 
            'user_id' => 'required'
        ]); 
        if ($data->fails()) {
            return response($data->errors()->all(), 501);
        } else {
            $input = $request->all();
            $post = Post::create($input);
            return response(['post' => new PostResource($post), 'message' => 'Created Success'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return response(['post' => new PostResource($Post), 'message' => 'Retrieved Success'], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $postId)
    {
        $post = Post::findOrFail($postId);
        $post->update($request->only('postEng', 'postIgbo'));
        return response(['post' => new PostResource($post), 'message' => 'Updated Success'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post = Post::find($postId);
        $post->delete(); // Easy right?
        
        return response()->json(['postId' => $postId], 200);
    }
}
