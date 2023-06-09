PGDMP         6                 {            atmosphere_app    14.5    14.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16789    atmosphere_app    DATABASE     c   CREATE DATABASE atmosphere_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'tr_TR.UTF-8';
    DROP DATABASE atmosphere_app;
                postgres    false            �            1259    16800    application    TABLE     �  CREATE TABLE public.application (
    id character varying(50) NOT NULL,
    tc character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone,
    updated_by character varying(50),
    name character varying,
    cv character varying(50),
    city character varying(200),
    tel character varying(50),
    "jobType" character varying(50)
);
    DROP TABLE public.application;
       public         heap    postgres    false            �            1259    16814    users    TABLE     '  CREATE TABLE public.users (
    userid character varying(90) NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(70) NOT NULL,
    fullname character varying(50),
    email character varying(50),
    role character varying(50) DEFAULT 'User'::character varying NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by character varying(50) DEFAULT 'System'::character varying NOT NULL,
    updated_at timestamp without time zone,
    updated_by character varying(50)
);
    DROP TABLE public.users;
       public         heap    postgres    false                       0    16800    application 
   TABLE DATA           q   COPY public.application (id, tc, created_at, updated_at, updated_by, name, cv, city, tel, "jobType") FROM stdin;
    public          postgres    false    209                    0    16814    users 
   TABLE DATA           �   COPY public.users (userid, username, password, fullname, email, role, created_at, created_by, updated_at, updated_by) FROM stdin;
    public          postgres    false    210   0       n           2606    16821    application pk_answers 
   CONSTRAINT     T   ALTER TABLE ONLY public.application
    ADD CONSTRAINT pk_answers PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.application DROP CONSTRAINT pk_answers;
       public            postgres    false    209            p           2606    16827    users pk_users 
   CONSTRAINT     P   ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_users PRIMARY KEY (userid);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT pk_users;
       public            postgres    false    210            r           2606    16829    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    210            t           2606    16831    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    210                   x������ � �         H  x�m��V�@�5<�Ě��DD��z��H��Ą�����␓�r����McVRǥ�\g���� ϠF�a�Im���Ծv��	'��Y��fv4��K��^n;73�P�������hrG��{��y1�=���Z�|�dU����!�P�&(CLCB�e����n��X�2��9$7ҕ�4DPE=��i!PTJI�q��:)�*{�W��΅���>�/����C��\2Q�����8[��B�uk1���(����w�G�'�B�B���W��qEp�X�,��()�J$49�1�TH`���n��9/��h�<Iz����ӽ67y�[�,f���&��?�R��݉����p�j����c��D�PHp�0���4&a�VTK/��A�ee�)�"�1�������n ��)�_6���e,� ��]w}u��NP{��{q�|�9����7��2�7��iH�>3��+���@��lw�aVVBH�S�CZ�0e���8*�Ut����-��;��FA{��
��Yb.�n�j=�����ֈ��w�QV��MP6k@�#������7�
     