import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAPI } from 'api/fetchAPI';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
