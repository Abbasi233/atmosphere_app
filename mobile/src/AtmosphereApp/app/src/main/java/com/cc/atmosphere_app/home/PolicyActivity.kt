package com.cc.atmosphere_app.home

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import com.cc.atmosphere_app.R


class PolicyActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_policy)
    }

    fun openSuccessActivity(view: View){
        startActivity(Intent(applicationContext, SuccessActivity::class.java))
    }

    fun goBack(view: View) {
        finish()
    }
}