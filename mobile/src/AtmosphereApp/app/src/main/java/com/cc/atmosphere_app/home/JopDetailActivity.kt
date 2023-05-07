package com.cc.atmosphere_app.home

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.cc.atmosphere_app.R

class JopDetailActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_jop_detail)
    }

    fun openApplyJob(view: View) {
        startActivity(Intent(applicationContext, ApplyJobActivity::class.java))
    }

    fun goBack(view: View){
        finish()
    }
}